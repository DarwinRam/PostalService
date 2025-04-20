function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('visible'));
    document.getElementById(id).classList.add('visible');
  }

  document.getElementById("addPackageForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const senderName = document.getElementById("senderName").value;
    const receiverName = document.getElementById("receiverName").value;
    const senderAddress = document.getElementById("senderAddress").value;
    const receiverAddress = document.getElementById("receiverAddress").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const costPerUnitWeight = parseFloat(document.getElementById("costPerUnitWeight").value);
    const trackingNumber = document.getElementById("trackingNumber").value;
    const packageType = document.getElementById("packageType").value;
    const flatFee = parseFloat(document.getElementById("flatFee").value || 0); // Only used for Two-Day
  
    const packageData = {
      senderName,
      receiverName,
      senderAddress,
      receiverAddress,
      weight,
      costPerUnitWeight,
      trackingNumber,
    };
  
    let endpoint = "";
  
    if (packageType === "OneDay") {
      endpoint = "/api/packages/oneday";
      packageData.expressFee = flatFee; // Assuming expressFee is reused here
    } else if (packageType === "TwoDay") {
      endpoint = "/api/packages/twoday";
      packageData.flatFee = flatFee;
    } else {
      alert("Please select a valid package type.");
      return;
    }
  
    fetch(`http://localhost:3000${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packageData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`${packageType} Package added successfully!`);
        document.getElementById("addPackageForm").reset(); // Clear form
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add package.");
      });
  });
  
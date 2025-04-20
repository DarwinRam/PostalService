function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
  if (id === 'list') {
    loadPackageList();
  }
}

document.getElementById("addPackageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const senderName = document.getElementById("senderName").value;
  const receiverName = document.getElementById("receiverName").value;
  const senderAddress = document.getElementById("senderAddress").value;
  const receiverAddress = document.getElementById("receiverAddress").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const costPerUnitWeight = parseFloat(document.getElementById("costPerUnitWeight").value);
  const packageType = document.getElementById("packageType").value;
  const flatFee = parseFloat(document.getElementById("flatFee").value || "0"); // Always used

  const packageData = {
    senderName,
    receiverName,
    senderAddress,
    receiverAddress,
    weight,
    costPerUnitWeight,
    flatFee  // Apply flatFee for both package types
  };

  let endpoint = "";

  if (packageType === "OneDay") {
    endpoint = "/api/packages/oneday";
  } else if (packageType === "TwoDay") {
    endpoint = "/api/packages/twoday";
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

function loadPackageList() {
  fetch('http://localhost:3000/api/packages')
    .then(res => res.json())
    .then(packages => {
      console.log('Fetched packages:', packages);  // Check data in the console
      const container = document.querySelector('#list');
      container.innerHTML = `
        <div class="back-button-container">
          <button onclick="showSection('home')">Back to Home</button>
        </div>
        <h2>Package List</h2>
      `;

      if (packages.length === 0) {
        container.innerHTML += '<p>No packages found.</p>';
        return;
      }

      packages.forEach(pkg => {
        const pkgDiv = document.createElement('div');
        pkgDiv.classList.add('package-item');
        pkgDiv.innerHTML = `
          <h3>Package #${pkg.tracking_number}</h3>
          <p>Sender: ${pkg.sender_name}</p>
          <p>Receiver: ${pkg.receiver_name}</p>
          <p>Status: ${pkg.status}</p>
        `;
        container.appendChild(pkgDiv);
      });
    })
    .catch(err => {
      console.error("Error loading packages:", err);
      alert("Failed to load packages.");
    });
}




document.getElementById("updateStatusForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const trackingNumber = e.target.elements[0].value.trim();
  const status = e.target.elements[1].value;

  fetch("http://localhost:3000/api/packages/update", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ trackingNumber, status }),
  })
    .then(res => res.json())
    .then(data => {
      alert("Package status updated successfully!");
      e.target.reset();
    })
    .catch(err => {
      console.error("Update error:", err);
      alert("Failed to update package status.");
    });
});


document.getElementById("deletePackageForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const trackingNumber = e.target.elements[0].value.trim();

  fetch("http://localhost:3000/api/packages/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ trackingNumber }),
  })
    .then(res => res.json())
    .then(data => {
      alert("Package deleted successfully!");
      e.target.reset();
    })
    .catch(err => {
      console.error("Delete error:", err);
      alert("Failed to delete package.");
    });
});

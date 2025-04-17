function showFeesDetails() {
    let uid = document.getElementById("uid").value;
    let feesDetails = document.getElementById("fees-details");

    if (uid === "01") {
        feesDetails.innerHTML = "<p>Student Name: John Doe</p><p>Pending Fees: $500</p>";
    } else {
        feesDetails.innerHTML = "<p>No pending fees found.</p>";
    }
}

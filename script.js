function ContactMe() {
  var reason = prompt("Reason for Contact:\n1. Research\n2. Thesis\n3. Internship");
  if (!reason) return;
  reason = reason.toLowerCase();

  var output = "Reason for Contact: " + reason + "\n";

  if (reason == "research") {
    var sector = prompt("Which sector is your research in?");
    var area = prompt("What is your specific research area?");
    output += "Research Sector: " + sector + "\nResearch Area: " + area + "\n";
  } else if (reason == "thesis") {
    var topic = prompt("What is your thesis area?");
    var supervisor = prompt("Who is your thesis supervisor?");
    output += "Thesis Area: " + topic + "\nSupervisor: " + supervisor + "\n";
  } else if (reason == "internship") {
    var company = prompt("Which company you represent?");
    var duration = prompt("How long is the internship?");
    output += "Company: " + company + "\nDuration: " + duration + "\n";
  } else {
    alert("Invalid Reason for Contact.");
    return;
  }

  var service = prompt("Services:\n1. Development\n2. Design\n3. Maintenance");
  if (!service) return;
  service = service.toLowerCase();

  var output2 = "Service: " + service + "\n";

  if (service == "development") {
    var devType = prompt("What type of development service do you need?");
    output2 += "Development Type: " + devType + "\n";
  } else if (service == "design") {
    var designType = prompt("What type of design are you looking for?");
    output2 += "Design Type: " + designType + "\n";
  } else if (service == "maintenance") {
    var system = prompt("Which system do you need maintenance for?");
    output2 += "System: " + system + "\n";
  } else {
    alert("Invalid Service choice.");
    return;
  }

  // Show all collected info
  alert("Collected Information:\n\n" + output + output2);
}
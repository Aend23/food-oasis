export const STAKEHOLDER_SCHEMA = [
  {
    name: "id",
    label: "ID",
    description: "Stakeholder ID (leave blank for new entries)",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "name",
    label: "Name",
    description: "Name of stakeholder",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "address1",
    label: "Address 1",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "address2",
    label: "Address 2",
    description: "",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "city",
    label: "City",
    description: "City as listed",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "state",
    label: "State",
    description: "State as listed",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "zip",
    label: "Zip",
    description: "Zip as listed",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "phone",
    label: "Phone",
    description: "Phone as listed",
    required: "Yes",
    default_value: "",
    sample_format: "(xxx)xxx-xxxx",
  },
  {
    name: "latitude",
    label: "Latitude",
    description: "",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "longitude",
    label: "Longitude",
    description: "",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "website",
    label: "Website",
    description: "",
    required: "No",
    default_value: "",
    sample_format: "https://foodoasis.la",
  },
  {
    name: "fmId",
    label: "FM ID",
    description: "",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "notes",
    label: "Notes",
    description: "",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "createdDate",
    label: "Created Date",
    description: "",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "createdLoginId",
    label: "Created Login ID",
    description: "ID of user who created record",
    required: "No",
    default_value: "Auto",
    sample_format: 101,
  },
  {
    name: "modifiedDate",
    label: "Modified Date",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "modifiedLoginId",
    label: "Modified Login ID",
    description: "ID of user who modified record",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "submittedDate",
    label: "Submitted Date",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "submittedLoginId",
    label: "Submitted Login ID",
    description: "ID of user who submitted record",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "requirements",
    label: "Requirements",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "adminNotes",
    label: "Admin Notes",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "inactive",
    label: "Inactive",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "parentOrganization",
    label: "Parent Organization",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "physicalAccess",
    label: "Physical Access",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "email",
    label: "Email",
    description: "Stakeholder's email",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "items",
    label: "Items",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "services",
    label: "Services",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "facebook",
    label: "Facebook",
    description: "Stakeholder's Facebook URL",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "twitter",
    label: "Twitter",
    description: "Stakeholder's Twitter handle",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "pinterest",
    label: "Pinterest",
    description: "Stakeholder's Pinterest URL",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    description: "Stakeholder's LinkedIn URL",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "description",
    label: "Description",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "approvedDate",
    label: "Approved Date",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "reviewedLoginId",
    label: "Reviewed Login ID",
    description: "ID of user who reviewed stakeholder",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "assignedLoginId",
    label: "Assigned Login ID",
    description: "ID of user who is assigned to stakeholder",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "agencyType",
    label: "Agency Type",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "assignedDate",
    label: "Assigned Date",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "reviewNotes",
    label: "Review Notes",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "claimedLoginId",
    label: "Claimed Login ID",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "claimedDate",
    label: "Claimed Date",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "instagram",
    label: "Instagram",
    description: "Stakeholder's Instagram handle",
    required: "No",
    default_value: "",
    sample_format: "",
  },
  {
    name: "adminContactName",
    label: "Admin Contact Name",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "adminContactPhone",
    label: "Admin Contact Phone",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "adminContactEmail",
    label: "Admin Contact Email",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationContactName",
    label: "Donation Contact Name",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationContactPhone",
    label: "Donation Contact Phone",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationContactEmail",
    label: "Donation Contact Email",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationPickup",
    label: "Donation Pickup",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationAcceptFrozen",
    label: "Donation Accept Frozen",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationAcceptRefrigerated",
    label: "Donation Accept Refrigerated",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationAcceptPerishable",
    label: "Donation Accept Perishable",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationSchedule",
    label: "Donation Schedule",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationDeliveryInstructions",
    label: "Donation Delivery Instructions",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "covidNotes",
    label: "COVID Notes",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "donationNotes",
    label: "Donation Notes",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "categoryNotes",
    label: "Category Notes",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "eligibilityNotes",
    label: "Eligibility Notes",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "foodTypes",
    label: "Food Types",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "languages",
    label: "Languages",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "confirmedName",
    label: "",
    description: "",
    required: "No",
    default_value: "f",
    sample_format: "f",
  },
  {
    name: "confirmedCategories",
    label: "",
    description: "",
    required: "No",
    default_value: "f",
    sample_format: "f",
  },
  {
    name: "confirmedAddress",
    label: "",
    description: "",
    required: "No",
    default_value: "f",
    sample_format: "f",
  },
  {
    name: "confirmedPhone",
    label: "",
    description: "",
    required: "No",
    default_value: "f",
    sample_format: "f",
  },
  {
    name: "confirmedEmail",
    label: "",
    description: "",
    required: "No",
    default_value: "f",
    sample_format: "f",
  },
  {
    name: "confirmedHours",
    label: "",
    description: "",
    required: "No",
    default_value: "f",
    sample_format: "f",
  },
  {
    name: "confirmedFoodTypes",
    label: "",
    description: "",
    required: "No",
    default_value: "f",
    sample_format: "f",
  },
  {
    name: "verificationStatusId",
    label: "Verification Status ID",
    description: "",
    required: "Yes",
    default_value: "1",
    sample_format: "",
  },
  {
    name: "inactiveTemporary",
    label: "Inactive Temporary",
    description: "",
    required: "Yes",
    default_value: "f",
    sample_format: "",
  },
  {
    name: "hours",
    label: "Hours",
    description:
      "Hours of operation. Format = (week of month, day of week, open time, close time)",
    required: "No",
    default_value: "---",
    sample_format:
      "(3,Fri,10:00:00,13:00:00),\n(1,Sat,10:00:00,13:00:00),\n(1,Fri 10:00:00,13:00:00),\n (3,Sat,10:00:00,13:00:00)",
  },
  {
    name: "categoryIds",
    label: "Category IDs",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "neighborhoodId",
    label: "Neighborhood ID",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "completeCriticalPercent",
    label: "Complete Critical Percent",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "tenantId",
    label: "Tenant ID",
    description:
      "ID of the tenant who is hosting the food oasis service (1 = LA, 2 = CA, 3 = HI)",
    required: "Yes",
    default_value: "",
    sample_format: 1,
  },
  {
    name: "foodBakery",
    label: "Food Bakery",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "foodDryGoods",
    label: "Food Dry Goods",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "foodProduce",
    label: "Food Produce",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "foodDairy",
    label: "Food Dairy",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "foodPrepared",
    label: "Food Prepared",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
  {
    name: "foodMeat",
    label: "Food Meat",
    description: "",
    required: "Yes",
    default_value: "",
    sample_format: "",
  },
];
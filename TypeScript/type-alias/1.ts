// Assume that this is auto-generated from a GraphQL query and we shouldn't modify it
type FetchCompanyDataQuery = {
  company: {
    departments: {
      teamMembers: {
        name: string;
        role: string;
      }[];
    };
  };
};

// This type is copy and pasted from the FetchCompanyDataQuery type, How can we avoid this duplication?
type TeamMember = {
    name: string;
    role: string;
};

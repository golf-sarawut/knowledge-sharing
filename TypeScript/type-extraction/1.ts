type FetchCompanyDataQuery = {
  company: {
    departments: {
      teamMembers: {
        details: {
          name: string;
          role: string;
        }[];
      }[];
    };
  };
};
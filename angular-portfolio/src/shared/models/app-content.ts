export interface AppContent {
  Technologies: string[];
  Person: {
    Name: string;
    Role: string;
    SmallDescription: string;
    LongDescription: string;
  };
  Career: {
    Description: string;
    Experiences: {
      Company: string;
      Position: string;
      StartDate: string;
      EndDate: string;
      Description: string;
      Tasks: string[];
      Technologies: string[];
    }[];
  };
}
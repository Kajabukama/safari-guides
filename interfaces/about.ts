export interface Attraction {
  id: string;
  name: string;
  image: string;
  circuit: string;
  description: string;
}

export interface Fact {
  title: string;
  description: string;
  icon: React.ReactNode;
}

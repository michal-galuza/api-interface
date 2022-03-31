export interface IGetFormValues {
  name: string;
  surname: string;
  age: number;
  job: "consultant" | "enginer";
  description?: string;
}

export interface ISendFormValues {
  name: string;
  surname: string;
  age: number;
  job: "consultant" | "enginer";
  description: string | null;
}

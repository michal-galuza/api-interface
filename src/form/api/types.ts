export interface IGetFormValues {
  name: string;
  surname: string;
  age: number;
  job: "consultant" | "enginer";
  description?: string;
}

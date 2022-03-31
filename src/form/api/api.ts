import { IFormValues } from "../types";
import { IGetFormValues } from "./types";

const fakeFetch = (url: string) =>
  Promise.resolve<IGetFormValues>({
    age: 10,
    job: "consultant",
    name: "asd",
    surname: "asda",
    description: "1231",
  });

export class ExampleApi {
  public getFromValuesUrl() {
    return "/api/form-values";
  }

  private mapGetFormValues(data: IGetFormValues): IFormValues {
    return data;
  }

  public async getFormValues(): Promise<IFormValues> {
    const res = await fakeFetch(this.getFromValuesUrl());
    return this.mapGetFormValues(res);
  }
}

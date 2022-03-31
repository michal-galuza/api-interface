import { IFormValues } from "../types";
import { IGetFormValues, ISendFormValues } from "./types";

const fakeFetchGetFormValues = (url: string) =>
  Promise.resolve<IGetFormValues>({
    age: 10,
    job: "consultant",
    name: "asd",
    surname: "asda",
    description: "1231",
  });

const fakeFetchSendFormValues = (data: ISendFormValues) =>
  Promise.resolve<"OK">("OK");

export class ExampleApi {
  private static instance: ExampleApi;

  public static getInstance(): ExampleApi {
    if (!ExampleApi.instance) {
      ExampleApi.instance = new ExampleApi();
    }
    
    return ExampleApi.instance;
  }

  public getFormValuesUrl() {
    return "/api/form-values";
  }

  private mapGetFormValues(data: IGetFormValues): IFormValues {
    return data;
  }

  public async getFormValues(): Promise<IFormValues> {
    const res = await fakeFetchGetFormValues(this.getFormValuesUrl());
    return this.mapGetFormValues(res);
  }

  public sendFormValuesUrl(): string {
    return "/api/form-values";
  }

  public mapSendFormValues(data: IFormValues): ISendFormValues {
    return { ...data, description: data.description || null };
  }

  public async sendFormValues(data: IFormValues): Promise<"OK"> {
    const res = await fakeFetchSendFormValues(this.mapSendFormValues(data));
    return res;
  }
}

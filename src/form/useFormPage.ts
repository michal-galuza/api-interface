import { useCallback } from "react";
import { useQuery } from "react-query";
import { ExampleApi } from "./api";
import { IFormValues } from "./types";

const api = new ExampleApi();

const initialData: IFormValues = {
  age: 22,
  job: "consultant",
  name: "michal",
  surname: "galuza",
  description: undefined,
};

export const useFormPage = () => {
  const { data, isLoading } = useQuery<IFormValues>(
    api.getFromValuesUrl(),
    () => api.getFormValues(),
    {
      onSuccess: (data) => data || initialData,
    }
  );

  const handleSubmitForm = useCallback((values: IFormValues) => {
    console.log(values);
  }, []);

  return { initialValuesForm: data, isLoading, handleSubmitForm };
};

import { useCallback } from "react";
import { useMutation, useQuery } from "react-query";
import { ExampleApi } from "./api";
import { IFormValues } from "./types";

const api = ExampleApi.getInstance();

const initialData: IFormValues = {
  age: 22,
  job: "consultant",
  name: "michal",
  surname: "galuza",
  description: undefined,
};

const useGetFormValues = () => {
  const { data, isLoading } = useQuery<IFormValues>(
    api.getFormValuesUrl(),
    () => api.getFormValues(),
    {
      onSuccess: (data) => data || initialData,
    }
  );

  return { initialValuesForm: data, isLoading };
};

const useSendFormValues = () => {
  const { mutateAsync } = useMutation(api.sendFormValues);
  const sendFormValues = useCallback(
    async (values: IFormValues) => {
      await mutateAsync(values);
    },
    [mutateAsync]
  );

  return { sendFormValues };
};

export const useFormPage = () => {
  const { initialValuesForm, isLoading: formValuesIsLoading } =
    useGetFormValues();
  const { sendFormValues } = useSendFormValues();

  const handleSubmitForm = useCallback(
    async (values: IFormValues) => {
      await sendFormValues(values);
    },
    [sendFormValues]
  );

  return {
    initialValuesForm,
    formValuesIsLoading,
    handleSubmitForm,
  };
};

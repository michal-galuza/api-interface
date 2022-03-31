import { ExampleForm } from "./Form";
import { useFormPage } from "./useFormPage";

export const FormPage = (): JSX.Element => {
  const { handleSubmitForm, initialValuesForm } = useFormPage();
  return (
    <div>
      <h1>Example</h1>
      {initialValuesForm && (
        <ExampleForm
          onSubmit={handleSubmitForm}
          initialValues={initialValuesForm}
        />
      )}
    </div>
  );
};

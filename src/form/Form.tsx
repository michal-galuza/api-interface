import { Formik, Form, Field } from "formik";
import { IFormValues } from "./types/form-values.interface";

interface IExampleFormProps {
  initialValues: IFormValues;
  onSubmit: (values: IFormValues) => void;
}

export const ExampleForm = ({
  initialValues,
  onSubmit,
}: IExampleFormProps): JSX.Element => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field name="age" type="number" placeholder="age" />
        <Field name="job" type="text" placeholder="job" />
        <Field name="name" type="text" placeholder="name" />
        <Field name="surname" type="text" placeholder="surname" />
        <Field name="description" type="text" placeholder="description" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

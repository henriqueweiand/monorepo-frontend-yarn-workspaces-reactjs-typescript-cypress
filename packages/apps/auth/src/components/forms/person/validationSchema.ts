import * as Yup from "yup";

const validationSchema = () => {
  return Yup.object().shape({
    fullName: Yup.string().required("Deve ser preenchido"),
    document: Yup.string().required("Deve ser preenchido"),
  });
};

export { validationSchema };

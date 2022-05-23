import { object, string } from "yup";

const payload = {
  body: object({
   
      
  }),
};

const params = {
  params: object({
    matricule: string().required("matricule is required"),
  }),
};

export const createCarSchema = object({
  ...payload,
});

export const updateCarSchema = object({
  ...params,
  ...payload,
});

export const deleteCarSchema = object({
  ...params,
});

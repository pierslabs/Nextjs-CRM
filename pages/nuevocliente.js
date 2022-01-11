import React from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

const Nuevocliente = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellidos: "",
      email: "",
      empresa: "",
      telefono: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre del cliente es obligatorio"),
      apellidos: Yup.string().required(
        "El apellido del cliente es obligatorio"
      ),
      empresa: Yup.string().required("La empresa del cliente es obligatoria"),
      email: Yup.string()
        .email("Email no valido")
        .required("El email del cliente es obligatorio"),
    }),
    onSubmit: (valores) => {
      console.log(valores);
    },
  });

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                type="text"
                className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
                id="nombre"
                placeholder="Nombre Cliente"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="apellidos"
              >
                Apellidos
              </label>
              <input
                type="text"
                className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
                id="apellidos"
                placeholder="Apellidos Cliente"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apellidos}
              />
            </div>
            {formik.touched.apellidos && formik.errors.apellidos ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.apellidos}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="Email Cliente"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.email}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="empresa"
              >
                Empresa
              </label>
              <input
                type="text"
                className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
                id="empresa"
                placeholder="Empresa"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.empresa}
              />
            </div>
            {formik.touched.empresa && formik.errors.empresa ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.empresa}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="telefono"
              >
                Telefono
              </label>
              <input
                type="tel"
                className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
                id="telefono"
                placeholder="Telefono Cliente"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telefono}
              />
            </div>
            {formik.touched.telefono && formik.errors.telefono ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.telefono}</p>
              </div>
            ) : null}
            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
              value="Registrar Cliente"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Nuevocliente;
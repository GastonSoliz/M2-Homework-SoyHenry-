export default function enviarForm(formulario) {
  return { type: "FORM_DATA", payload: formulario };
}
const UserValidation = (values) => {
  const errors = {};

  if (!values.nama || values.nama === "") {
    errors.nama = "The name must be filled in";
  }

  if (!values.umur || values.umur === "") {
    errors.umur = "Age must be filled";
  }

  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Address must be filled";
  }

  if (!values.nohp || values.nohp === "") {
    errors.nohp = "Mobile Number must be filled";
  }

  return errors
};

export default UserValidation;

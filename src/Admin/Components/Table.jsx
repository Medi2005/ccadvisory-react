import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CrudBtn from "../Components/CrudBtn";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { axiosClient } from "../../api/axios";
import { Link } from "react-router-dom";

const Table = ({
  id,
  nomComplet,
  email,
  numTelephone,
  dateInscription,
  onDeleteSuccess,
  selectAll, // Fonction callback pour gérer la suppression réussie
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = async () => {
    setLoading(true);
    setError(null); // Réinitialiser l'erreur avant la suppression
    try {
      await axiosClient.delete(`/api/client/${id}`); // Utilisez axiosClient pour faire la requête DELETE
      onDeleteSuccess(); // Appel de la fonction pour mettre à jour la liste après suppression
      setOpen(false); // Fermer le modal après suppression
    } catch (error) {
      setError("Erreur lors de la suppression de l'utilisateur.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <tr>
      <td>
        <input type="checkbox" checked={selectAll} readOnly/>
      </td>
      <td>{id}</td>
      <td>{nomComplet}</td>
      <td>{email}</td>
      <td>{numTelephone}</td>
      <td>{dateInscription}</td>
      <td className="flex flex-row-reverse gap-4 items-center">
        <CrudBtn
          icons={
            <FontAwesomeIcon icon={faTrashCan} className="text-Fluorescent" />
          }
          onClick={handleClickOpen}
        />
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleCancel}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Confirmer la suppression"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Êtes-vous sûr de vouloir supprimer cet utilisateur ?
            </DialogContentText>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDelete} color="secondary" disabled={loading}>
              {loading ? "Suppression en cours..." : "Supprimer"}
            </Button>
            <Button onClick={handleCancel} autoFocus>
              Annuler
            </Button>
          </DialogActions>
        </Dialog>
        {/* <Link to={`/Edit-client/${id}`}> */}
        <Link to={`/Edit-client/${id}`}>
          <CrudBtn
            icons={
              <FontAwesomeIcon icon={faPenToSquare} className="text-SFPETROL" />
            }
          />
        </Link>
      </td>
    </tr>
  );
};

export default Table;

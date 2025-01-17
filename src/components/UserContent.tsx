import React, { useState } from "react";
import {Alert, Button, TextField} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchUserData } from "../api/api";
import {updateUserData} from "../redux/slices/userSlice";
import {CustomLoginSection} from "../pages/LoginPage";

export const UserContent: React.FC = () => {
  const [accountId, setAccountId] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { userData, error } = useSelector(
    (state: RootState) => state.user,
  );

  const handleSearch = () => {
    if (userData || error) {
      dispatch({ type: "user/clearUserData" });
    }
    dispatch(fetchUserData(accountId));
  };

  const handleUpdateAddress = () => {
      if (userData) {
          const updatedUserData = {
              ...userData,
              address: {...userData.address, city: newAddress},
          };
          dispatch(updateUserData(updatedUserData));
          setSuccessMessage("Success!");
          setIsEditing(false);
      }
  };

  return (
    <CustomLoginSection>
      <div style={{ display: "flex" }}>
        <TextField
          error={!!error}
          onChange={(e) => setAccountId(e.target.value)}
          label="Account ID"
        />
        <Button disabled={!accountId} onClick={handleSearch}>
          Search
        </Button>
      </div>
      {error && <div style={{ color: "red", fontSize: "20px" }}>{error}</div>}
      {userData && !error && (
        <div style={{ marginTop: 20 }}>
          <h3>User Info:</h3>
          <p>ID: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p style={{ fontWeight: "bold" }}>Address</p>
          {isEditing ? (
            <TextField
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              variant="outlined"
            />
          ) : (
            userData.address?.city
          )}
          {isEditing ? (
            <Button disabled={!newAddress} onClick={handleUpdateAddress}>
              Save changes
            </Button>
          ) : (
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
          )}
          {successMessage && (
            <Alert severity="success">
              {successMessage}
            </Alert>
          )}
        </div>
      )}
    </CustomLoginSection>
  );
};

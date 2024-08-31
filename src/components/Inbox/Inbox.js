import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import "./Inbox.css";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import refresh from "../../Assets/refresh.png";

const Inbox = ({ onEmailSelect }) => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const fetchEmails = async () => {
    try {
      const token = localStorage.getItem("authtoken");
      const response = await fetch(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch emails");
      }

      const data = await response.json();
      setEmails(data.data || []);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleReset = async () => {
    try {
      const token = localStorage.getItem("authtoken");
      const response = await fetch(
        "https://hiring.reachinbox.xyz/api/v1/onebox/reset",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to reset");
      }

      
      fetchEmails();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  if(loading){
    return(
      <Box>Loading....</Box>
    )
  }
  return (
    <Box className="inbox">
      <div className="inbox-header">
        <div className="header">
          <h3>All Inbox(s)</h3>
          <button className="refreshimg" onClick={handleReset}>
            <img src={refresh} alt="Refresh" />
          </button>
         
        </div>
        <div className="inboxlength">
          {emails.length}/{emails.length} Inboxes selected
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>

        <div className="new">
          <div>{emails.length} New Replies</div>
          <button className="new-btn">
            Newest <KeyboardArrowDownIcon />{" "}
          </button>
        </div>
      </div>
      <List>
        {emails.map((item, index) => (
          <ListItem
            key={index}
            className={`inbox-list-item ${index === 4 ? "selected" : ""}`}
            onClick={() => onEmailSelect(item)}
          >
            <ListItemText
              primary={
                <Typography sx={{ fontWeight: "bold" }}>
                  {item.fromEmail}
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body2" className="typography-muted">
                    {item.subject}
                  </Typography>
                  <Divider className="divider" />
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Inbox;

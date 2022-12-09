import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
	components: {
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    "&.Mui-checked": {
                        color: 'chartreuse', 
                        "&+.MuiSwitch-track": {
                            backgroundColor: '#7fff0099'
                        }
                    },
                } 
            }
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                },
                body: {
                    fontSize: '18px',
                }
            }
        },

        // MuiMenuItem: {
        //     styleOverrides: {
        //         root: {
        //             fontSize: '18px',
        //             backgroundColor: 'lightgray',
        //             border: '1px solid lightskyblue',      
        //         }
        //     }
        // },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: '18px',
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'black',
                    textTransform: "none",
                    fontSize: "20px",
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    justifyContent: 'space-evenly',
                },
                root: {
                    width: '100%',
                    backgroundColor: '#87cefacc',
                },
                
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: "20px",
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                outlined: {
                    padding: "5px 10px",
                }
            }
        },
	},
});

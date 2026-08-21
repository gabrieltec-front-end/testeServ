
import { Box, Container, Grid } from "@mui/material"
import { StyledLogo, Formulario, StyledBackgound } from "@/Componentes"
import { ChangeEvent, useEffect } from "react"
import { RequestPost, UseValidation } from "@/hooks"
import { LoginData, PostData, JWToken } from "@/types"
import { menssage } from "@/types/Formulario"
import Cookies from 'js-cookie'
import { JwtTokenTime } from "@/utils"
import Rem from "@/utils/pxToRem"
import { jwtDecode } from "jwt-decode"

import { useNavigate } from "react-router-dom"





function Login() {
    const navigate = useNavigate()

    const inputs = [{ type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Senha" }
    ]


    const { HandleChange, valid, formValues } = UseValidation(inputs)

    const { data, loading, error, UsePost } = RequestPost<LoginData, PostData>("login")



    const HandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await UsePost({
            email: String(formValues[0]),
            password: String(formValues[1])
        })


    }


    const HandleMensagem = (): menssage => {
        if (!error) return { type: "success", comentario: "" }
        switch (error) {
            case 400:
                return { type: "error", comentario: "Email ou senha invalidos" }

            default: return {
                type: "error",
                comentario: "Não foi possivel fazer esta operação"
            }

        }
    }


    useEffect(() => {
        if (!data) return
        console.log("RESPOSTA LOGIN:", data)
        const token = data.authorization.replace("Bearer", "")
        const decode = jwtDecode<JWToken>(token)
        Cookies.set("authorization", data.authorization, {
            sameSite: "Strict",
            expires: JwtTokenTime(decode.exp)
        })
        if (Cookies.get("authorization")) {

            navigate("/home", { replace: true })
        }



    }, [data, navigate])


    return (
        <Box>
            <Grid container>
                <Grid size={{ sm: 12, xs: 12 }} sx={{ display: "flex", alignItems: "center", height: "100vh" }}>


                    <Container maxWidth="sm"
                    >
                        <StyledBackgound>
                            <Grid size={{ sm: 12, xs: 12, }}
                                sx={{
                                    marginTop: Rem(25),
                                    marginBottom: Rem(25),
                                    display: "flex",
                                    justifyContent: { sm: "center", xs: "center" }
                                }}>

                                <StyledLogo width={165} height={100} />
                            </Grid>
                            <Grid>
                                <Formulario input={inputs.map((inputs, index) => ({
                                    type: inputs.type,
                                    placeholder: inputs.placeholder,
                                    value: formValues[index],
                                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                                        HandleChange(index, (e.target as HTMLInputElement).value)
                                    }
                                }))}
                                    label=""
                                    button={[{
                                        type: "submit",
                                        className: valid === false ? "disabled" : "primary",
                                        disabled: !valid || loading,
                                        children: loading ? "Enviando..." : "Enviar",
                                        onClick: HandleSubmit
                                    }]}
                                    msg={HandleMensagem()} />


                            </Grid>
                        </StyledBackgound>
                    </Container>



                </Grid>


            </Grid>

        </Box>

    )
}
export default Login
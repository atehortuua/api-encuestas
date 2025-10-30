export const succes = (res, data ={}, message = "funcionando correctamente", code = 200) => {
    return res.status(code).json({ok: true, message,data});
};

export const error =(res, message = "error", code = 500 ) => {
    return res.status(code).json ({ok: false, message })
}
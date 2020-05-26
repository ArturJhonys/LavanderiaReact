import { useState, useEffect } from "react"
import http from "../../../infra/http"
import { URLS } from "../../../res/URLS"

function useServicosAPI(unidade) {
    const [payload, setPayload] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        (async () => {
            setLoading(true)
            try {
                let url = URLS.OBTER_SERVICOS
                if (unidade) url = URLS.OBTER_SERVICOS_FILTRADO(unidade)

                const { data } = await http.get(url)
                setPayload(data)

            } catch (e) {
                //TODO tratar este erro
                alert('NÃO FOI POSSIVEL BUSCAR OS SERVIÇOS!')
            } finally {
                setLoading(false)
            }
        })()


    }, [unidade])

    return [payload, loading]
}

export default useServicosAPI
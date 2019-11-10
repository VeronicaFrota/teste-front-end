export class Item {
    kind: string                                //"youtube#searchListResponse"
    etag: string                                //"\"j6xRRd8dTPVVptg711_CSPADRfg/5Jcl-1sE0tEqWKyUhOiQWuRzdOk\""
    nextPageToken: string                       //"CAUQAA"
    regionCode: string                          //"BR"
    pageInfo: {
        totalResults: number                    //466936
        resultsPerPage: number                  // 5
    }
    items: [
        {
            kind: string                       //"youtube#searchResult",
            etag: string                       //"\"j6xRRd8dTPVVptg711_CSPADRfg/Je23eiFA10519tzXRMvKYK-sZks\"",
            id: {
                kind: string                   //"youtube#channel",
                channelId: string              //"UCmEClzCBDx-vrt0GuSKBd9g"
            },
            snippet: {
                publishedAt: Date              //"2006-08-24T20:11:03.000Z",
                channelId: string              //"UCmEClzCBDx-vrt0GuSKBd9g",
                title: string                  //"Jovem Nerd",
                description: string             //"Cinema, Quadrinhos, Séries, Games, Internet e Tecnologia são muito mais divertidos no Jovem Nerd! Conheça o site! http://www.jovemnerd.com.br E a loja ...",
                thumbnails: {
                    default: {
                        url: string             //"https://yt3.ggpht.com/-7fcw8siXHiA/AAAAAAAAAAI/AAAAAAAAAAA/_R0LxzpV7qk/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    },
                    medium: {
                        url: string             //"https://yt3.ggpht.com/-7fcw8siXHiA/AAAAAAAAAAI/AAAAAAAAAAA/_R0LxzpV7qk/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    },
                    high: {
                        url: string             //"https://yt3.ggpht.com/-7fcw8siXHiA/AAAAAAAAAAI/AAAAAAAAAAA/_R0LxzpV7qk/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    }
                },
                channelTitle: string           //"Jovem Nerd",
                liveBroadcastContent: string   //"upcoming"
            }
        },
        {
            kind: string                        //"youtube#searchResult",
            etag: string                        //"\"j6xRRd8dTPVVptg711_CSPADRfg/9pISdn92PNTiADOQwZZJL7FiI_8\"",
            id: {
                kind: string                    // "youtube#video",
                videoId: string                 //"xZqDDwA4tnw"
            },
            snippet: {
                publishedAt: string             //"2019-11-05T14:00:11.000Z",
                channelId: string               //"UCmEClzCBDx-vrt0GuSKBd9g",
                title: string                   //"Erros e Perdas | NerdTrader 04",
                description: string             //"Link promoção Curso e Plataforma: http://bit.ly/2nurNOq Link abertura de conta: http://bit.ly/2q2ahTd YouTube Nelogica: http://bit.ly/2m4ZEwM Site da nova ...",
                thumbnails: {
                    default: {
                        url: string             //"https://i.ytimg.com/vi/xZqDDwA4tnw/default.jpg",
                        width: number           //120,
                        height: number          //90
                    },
                    medium: {
                        url: string             //"https://i.ytimg.com/vi/xZqDDwA4tnw/mqdefault.jpg",
                        width: number           //320,
                        height: number          //180
                    },
                    high: {
                        url:string              //"https://i.ytimg.com/vi/xZqDDwA4tnw/hqdefault.jpg",
                        width: number           //480,
                        height: number          //360
                    }
                },
                channelTitle: string            //"Jovem Nerd",
                liveBroadcastContent: string    //"none"
            }
        }
    ]
}
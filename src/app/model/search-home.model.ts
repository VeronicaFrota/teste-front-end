export class Item {
    kind: string                                
    etag: string                                
    nextPageToken: string                       
    regionCode: string                          
    pageInfo: {
        totalResults: number                    
        resultsPerPage: number                  
    }
    items: [
        {
            kind: string                       
            etag: string                       
            id: {
                kind: string                   
                channelId: string              
            },
            snippet: {
                publishedAt: Date              
                channelId: string              
                title: string                  
                description: string            
                thumbnails: {
                    default: {
                        url: string            
                    },
                    medium: {
                        url: string            
                    },
                    high: {
                        url: string            
                    }
                },
                channelTitle: string           
                liveBroadcastContent: string   
            }
        },
        {
            kind: string                       
            etag: string                       
            id: {
                kind: string                   
                videoId: string                
            },
            snippet: {
                publishedAt: string            
                channelId: string              
                title: string                  
                description: string            
                thumbnails: {
                    default: {
                        url: string            
                        width: number          
                        height: number         
                    },
                    medium: {
                        url: string            
                        width: number          
                        height: number         
                    },
                    high: {
                        url:string             
                        width: number          
                        height: number         
                    }
                },
                channelTitle: string           
                liveBroadcastContent: string   
            }
        }
    ]
}
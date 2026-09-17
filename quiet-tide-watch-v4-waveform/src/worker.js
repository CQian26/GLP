
export class Session {
  constructor(state, env) { this.state = state; }
  async fetch(request) {
    const url=new URL(request.url);
    let s=await this.state.storage.get("session");
    if(!s)s={running:false,startMs:null,epoch:0};
    if(request.method==="GET")return Response.json(s,{headers:{"cache-control":"no-store"}});
    if(request.headers.get("x-control-key")!=="cuTifyrcjZ-jfqssqSPWS-8n")return new Response("Forbidden",{status:403});
    if(url.pathname.endsWith("/start")){s={running:true,startMs:Date.now(),epoch:(s.epoch||0)+1};await this.state.storage.put("session",s);return Response.json(s);}
    if(url.pathname.endsWith("/reset")){s={running:false,startMs:null,epoch:(s.epoch||0)+1};await this.state.storage.put("session",s);return Response.json(s);}
    return new Response("Not found",{status:404});
  }
}
export default {
 async fetch(request,env) {
   const url=new URL(request.url);
   if(url.pathname.startsWith("/api/")){const id=env.SESSION.idFromName("quiet-tide-day2");return env.SESSION.get(id).fetch(request);}
   return env.ASSETS.fetch(request);
 }
};

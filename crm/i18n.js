// 26/11/2026 · seletor de idioma do CRM (PT / EN / NL). Traduz o texto da interface depois de cada render
// (texto e atributos placeholder/aria-label/title). O conteúdo das leads e as mensagens para as leads não mudam.
(function(){
const D = {
 en: {
  "Painel de leads":"Leads dashboard","Ao vivo":"Live","Sair":"Log out","Entrar":"Log in","Senha":"Password","E-mail":"Email",
  "A carregar…":"Loading…","Leads":"Leads","Imóveis":"Properties","Imóvel":"Property","Pendências":"To-dos","Lista":"List","Quadro":"Board",
  "Ver em lista":"List view","Ver em quadro":"Board view","Ver todas":"See all","Mostrar mais":"Show more","Todas":"All","Todos os imóveis":"All properties",
  "Nova":"New","Contactada":"Contacted","Não atende":"No answer","Visita":"Viewing","Proposta":"Offer","Fechado":"Closed","Número errado":"Wrong number","Perdido":"Lost",
  "Hoje":"Today","Ontem":"Yesterday","Últimos 7 dias":"Last 7 days","Últimos 30 dias":"Last 30 days","Este mês":"This month","Mês anterior":"Last month",
  "Desde o início":"All time","Escolher datas…":"Pick dates…","Período":"Period","De":"From","Até":"To","até":"to",
  "Mensagem de WhatsApp":"WhatsApp message","Mensagem do WhatsApp":"WhatsApp message","Assunto do e-mail":"Email subject","Texto do e-mail":"Email text",
  "Copiar":"Copy","Gmail":"Gmail","App de e-mail":"Email app","Em que ponto está":"Stage","Estado":"Status","O que respondeu":"Answers","Notas":"Notes",
  "Guardar nota":"Save note","Nota guardada":"Note saved","Detalhes e histórico":"Details and history","Fechar":"Close","Desfazer":"Undo","Adicionar":"Add",
  "Procurar":"Search","Procurar nome, telefone…":"Search name, phone…","Filtrar por estado":"Filter by status","Cidade":"City","Cliente":"Client",
  "Formulário":"Form","Origem":"Source","Anúncio":"Ad","Anúncio ativo":"Ad running","Anúncio em pausa":"Ad paused","Sem anúncio":"No ad",
  "Investido":"Spent","Custo por lead":"Cost per lead","Sem atividade neste período":"No activity in this period","igual ao período anterior":"same as previous period",
  "Sem imóvel":"No property","Sem nome":"No name","sem nome":"no name","Sem respostas extra.":"No extra answers.",
  "Ainda não há leads":"No leads yet","Nada por aqui":"Nothing here","Nada pendente.":"Nothing pending.",
  "Experimente outro período ou outro imóvel.":"Try another period or property.",
  "Quando entrar a primeira pelo formulário da Meta, aparece aqui na hora.":"When the first one comes in through the Meta form, it shows up here right away.",
  "Está tudo em dia. Nenhuma lead à espera de resposta.":"All caught up. No leads waiting for a reply.",
  "Toque num imóvel para ver só as leads dele.":"Tap a property to see only its leads.",
  "Abriu o WhatsApp com a mensagem":"Opened WhatsApp with the message","Abriu o e-mail com a mensagem":"Opened email with the message",
  "Não deu para copiar aqui.":"Couldn't copy here.","Não gravou. Tente outra vez.":"Not saved. Please try again.",
  "Não foi possível abrir o painel":"Couldn't open the dashboard","Esta conta ainda não tem nenhum cliente associado.":"This account has no client linked yet.",
  "E-mail ou senha errados. Se esqueceu a senha, fale com a Além da Métrica.":"Wrong email or password. If you forgot it, contact Além da Métrica.",
  "Nova pendência":"New to-do","Da nossa parte":"On our side","Da sua parte":"On your side","O que a Além da Métrica tem em mãos.":"What Além da Métrica is working on.",
  "O que precisamos para avançar.":"What we need from you to move forward.","Só a Além da Métrica pode criar pendências.":"Only Além da Métrica can create to-dos.",
  "Ex.: ligou de volta, quer visita sábado":"E.g.: called back, wants a viewing on Saturday",
  "Os números das campanhas entram uma vez por dia, de manhã.":"Campaign numbers update once a day, in the morning.",
  "As leads chegam dos formulários da Meta no momento em que entram · dados na UE":"Leads arrive from the Meta forms the moment they come in · data in the EU",
  "Os dados ficam em servidores na União Europeia. Só quem tem acesso a este cliente os vê.":"Data is stored on servers in the European Union. Only people with access to this client can see it.",
  "Pré-visualização com dados fictícios":"Preview with sample data","Texto escrito pela IA para esta pessoa.":"Text written by AI for this person.",
  "Conversão enviada.":"Conversion sent.","agora":"now","ontem":"yesterday"
 },
 nl: {
  "Painel de leads":"Leadsdashboard","Ao vivo":"Live","Sair":"Afmelden","Entrar":"Aanmelden","Senha":"Wachtwoord","E-mail":"E-mail",
  "A carregar…":"Laden…","Leads":"Leads","Imóveis":"Panden","Imóvel":"Pand","Pendências":"Taken","Lista":"Lijst","Quadro":"Bord",
  "Ver em lista":"Lijstweergave","Ver em quadro":"Bordweergave","Ver todas":"Alles bekijken","Mostrar mais":"Meer tonen","Todas":"Alle","Todos os imóveis":"Alle panden",
  "Nova":"Nieuw","Contactada":"Gecontacteerd","Não atende":"Neemt niet op","Visita":"Bezichtiging","Proposta":"Bod","Fechado":"Gesloten","Número errado":"Verkeerd nummer","Perdido":"Verloren",
  "Hoje":"Vandaag","Ontem":"Gisteren","Últimos 7 dias":"Laatste 7 dagen","Últimos 30 dias":"Laatste 30 dagen","Este mês":"Deze maand","Mês anterior":"Vorige maand",
  "Desde o início":"Sinds het begin","Escolher datas…":"Datums kiezen…","Período":"Periode","De":"Van","Até":"Tot","até":"tot",
  "Mensagem de WhatsApp":"WhatsApp-bericht","Mensagem do WhatsApp":"WhatsApp-bericht","Assunto do e-mail":"Onderwerp e-mail","Texto do e-mail":"Tekst e-mail",
  "Copiar":"Kopiëren","Gmail":"Gmail","App de e-mail":"E-mailapp","Em que ponto está":"Fase","Estado":"Status","O que respondeu":"Antwoorden","Notas":"Notities",
  "Guardar nota":"Notitie opslaan","Nota guardada":"Notitie opgeslagen","Detalhes e histórico":"Details en geschiedenis","Fechar":"Sluiten","Desfazer":"Ongedaan maken","Adicionar":"Toevoegen",
  "Procurar":"Zoeken","Procurar nome, telefone…":"Zoek naam, telefoon…","Filtrar por estado":"Filteren op status","Cidade":"Stad","Cliente":"Klant",
  "Formulário":"Formulier","Origem":"Bron","Anúncio":"Advertentie","Anúncio ativo":"Advertentie actief","Anúncio em pausa":"Advertentie gepauzeerd","Sem anúncio":"Geen advertentie",
  "Investido":"Besteed","Custo por lead":"Kosten per lead","Sem atividade neste período":"Geen activiteit in deze periode","igual ao período anterior":"gelijk aan vorige periode",
  "Sem imóvel":"Geen pand","Sem nome":"Geen naam","sem nome":"geen naam","Sem respostas extra.":"Geen extra antwoorden.",
  "Ainda não há leads":"Nog geen leads","Nada por aqui":"Niets hier","Nada pendente.":"Niets openstaand.",
  "Experimente outro período ou outro imóvel.":"Probeer een andere periode of een ander pand.",
  "Quando entrar a primeira pelo formulário da Meta, aparece aqui na hora.":"Zodra de eerste via het Meta-formulier binnenkomt, verschijnt die hier meteen.",
  "Está tudo em dia. Nenhuma lead à espera de resposta.":"Alles bijgewerkt. Geen leads die op antwoord wachten.",
  "Toque num imóvel para ver só as leads dele.":"Tik op een pand om alleen de leads daarvan te zien.",
  "Abriu o WhatsApp com a mensagem":"WhatsApp geopend met het bericht","Abriu o e-mail com a mensagem":"E-mail geopend met het bericht",
  "Não deu para copiar aqui.":"Kopiëren lukte hier niet.","Não gravou. Tente outra vez.":"Niet opgeslagen. Probeer opnieuw.",
  "Não foi possível abrir o painel":"Het dashboard kon niet worden geopend","Esta conta ainda não tem nenhum cliente associado.":"Aan dit account is nog geen klant gekoppeld.",
  "E-mail ou senha errados. Se esqueceu a senha, fale com a Além da Métrica.":"Verkeerd e-mailadres of wachtwoord. Wachtwoord vergeten? Neem contact op met Além da Métrica.",
  "Nova pendência":"Nieuwe taak","Da nossa parte":"Van onze kant","Da sua parte":"Van uw kant","O que a Além da Métrica tem em mãos.":"Waar Além da Métrica mee bezig is.",
  "O que precisamos para avançar.":"Wat we van u nodig hebben om verder te gaan.","Só a Além da Métrica pode criar pendências.":"Alleen Além da Métrica kan taken aanmaken.",
  "Ex.: ligou de volta, quer visita sábado":"Bv.: teruggebeld, wil zaterdag een bezichtiging",
  "Os números das campanhas entram uma vez por dia, de manhã.":"De campagnecijfers worden één keer per dag bijgewerkt, 's ochtends.",
  "As leads chegam dos formulários da Meta no momento em que entram · dados na UE":"Leads komen binnen via de Meta-formulieren op het moment dat ze worden ingevuld · gegevens in de EU",
  "Os dados ficam em servidores na União Europeia. Só quem tem acesso a este cliente os vê.":"De gegevens staan op servers in de Europese Unie. Alleen wie toegang heeft tot deze klant ziet ze.",
  "Pré-visualização com dados fictícios":"Voorbeeld met fictieve gegevens","Texto escrito pela IA para esta pessoa.":"Tekst door AI geschreven voor deze persoon.",
  "Conversão enviada.":"Conversie verzonden.","agora":"nu","ontem":"gisteren"
 }
};
const P = { // padrões dinâmicos
 en: [[/\bBom dia\b/g,"Good morning"],[/\bBoa tarde\b/g,"Good afternoon"],[/\bBoa noite\b/g,"Good evening"],
      [/Tem 1 lead à espera/g,"1 lead is waiting"],[/Tem (\d+) leads à espera/g,"$1 leads are waiting"],[/(\d+) leads à espera/g,"$1 leads waiting"],
      [/À espera /g,"Waiting "],[/\bhá (\d+) min\b/g,"$1 min ago"],[/\bhá (\d+) h\b/g,"$1 h ago"],[/\bhá (\d+) dias\b/g,"$1 days ago"],
      [/^hoje, /,"today, "],[/^ontem, /,"yesterday, "],[/ às /g," at "],[/^Nova lead: /,"New lead: "],[/^Lead recebida pelo formulário /,"Lead received via form "]],
 nl: [[/\bBom dia\b/g,"Goedemorgen"],[/\bBoa tarde\b/g,"Goedemiddag"],[/\bBoa noite\b/g,"Goedenavond"],
      [/Tem 1 lead à espera/g,"1 lead wacht"],[/Tem (\d+) leads à espera/g,"$1 leads wachten"],[/(\d+) leads à espera/g,"$1 leads wachten"],
      [/À espera /g,"Wacht "],[/\bhá (\d+) min\b/g,"$1 min geleden"],[/\bhá (\d+) h\b/g,"$1 u geleden"],[/\bhá (\d+) dias\b/g,"$1 dagen geleden"],
      [/^hoje, /,"vandaag, "],[/^ontem, /,"gisteren, "],[/ às /g," om "],[/^Nova lead: /,"Nieuwe lead: "],[/^Lead recebida pelo formulário /,"Lead ontvangen via formulier "]]
};
const ORIG = new WeakMap(), ATTR = ["placeholder","aria-label","title"];
let lang = null;
try { lang = localStorage.getItem("crm_lang"); } catch(e) {}
function cur(){ if(lang) return lang; try { const l = S && S.client && S.client.config && S.client.config.lang; if(l) return l; } catch(e) {} return "pt"; }
function tr(t, L){
  if(L === "pt") return t;
  const d = D[L], k = t.trim();
  if(!k) return t;
  if(d[k]) return t.replace(k, d[k]);
  let o = t; for(const [re, r] of P[L]) o = o.replace(re, r); return o;
}
let busy = false;
function apply(){
  if(busy) return; busy = true;
  const L = cur();
  try {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: n => {
      const p = n.parentNode; if(!p) return 2; const tg = p.nodeName;
      if(tg === "SCRIPT" || tg === "STYLE" || tg === "TEXTAREA" || p.closest("[data-noi18n],.who b,.msgbox")) return 2;
      return 1; } });
    let n; while((n = w.nextNode())){
      let o = ORIG.get(n); if(o === undefined || (n.nodeValue !== o.t)) { o = { pt: n.nodeValue }; }
      const t = tr(o.pt, L); o.t = t; ORIG.set(n, o); if(n.nodeValue !== t) n.nodeValue = t;
    }
    document.querySelectorAll("[placeholder],[aria-label],[title]").forEach(el => {
      for(const a of ATTR){ if(!el.hasAttribute(a)) continue; const k = "i18n_" + a.replace("-", "_");
        if(el.dataset[k] === undefined || el.getAttribute(a) !== el.dataset[k + "_t"]) el.dataset[k] = el.getAttribute(a);
        const t = tr(el.dataset[k], L); el.dataset[k + "_t"] = t; if(el.getAttribute(a) !== t) el.setAttribute(a, t); }
    });
    document.documentElement.lang = { pt: "pt-PT", en: "en", nl: "nl" }[L];
    let s = document.getElementById("lang");
    if(!s){ s = document.createElement("select"); s.id = "lang"; s.setAttribute("data-noi18n", ""); s.setAttribute("aria-label", "Idioma / Language / Taal");
      s.innerHTML = '<option value="pt">PT</option><option value="en">EN</option><option value="nl">NL</option>';
      s.style.cssText = "font:600 12px var(--f);border:1px solid var(--line);background:var(--surface);color:var(--fg);border-radius:999px;padding:4px 8px;margin-left:8px;cursor:pointer";
      s.addEventListener("change", () => { lang = s.value; try { localStorage.setItem("crm_lang", lang); } catch(e) {} apply(); }); }
    const top = document.querySelector(".topr");
    if(top){ if(s.parentNode !== top){ s.style.position = ""; top.appendChild(s); } }
    else if(s.parentNode !== document.body){ s.style.position = "fixed"; s.style.top = "12px"; s.style.right = "12px"; s.style.zIndex = "50"; document.body.appendChild(s); }
    if(s.value !== L) s.value = L;
  } finally { busy = false; }
}
let tmr = null;
new MutationObserver(() => { if(busy) return; clearTimeout(tmr); tmr = setTimeout(apply, 30); })
  .observe(document.body, { childList: true, subtree: true, characterData: true });
window.addEventListener("load", apply); apply();
})();

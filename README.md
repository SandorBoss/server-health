# server-health

## az alkalmazás indítása és használata:
- indítás terminálból: `node start.js`
- az alkalmazás itt érhető el: `localhost:8080`
- a lekérdezések a böngésző url-mezőjéből indíthatók
- jelenleg működő url-query-k: `/?port=8080`, illetve `/?port=882`

## unit tesztek futtatása:
- előfeltétel: `npm install -g jasmine`
- futtatás terminálból: `npm test`

### egyéb tudnivalók:
- a lekérhető adatok file systemben vannak eltárolva
- hard-kódolt tesztadatokból kapunk választ
- a lekérhető adatok helye: `./server-infos` (.txt állományok)
- url-query-vel csak a 8080-as és a 8082-es portra kapunk statikus választ
- semmilyen hibakezelés nem lett megvalósítva
- a logok dinamikusan jegyzik a kérés időpontját
- a kérésekre adott válasszal együtt mennek ki a logolt adatok a böngésző felé
- a logfájl dinamikusan töltődik; helye: `./request-log/request-log.txt`
- a unint teszek szmára külön logfájl lett létrehozva (`./request-log/test-log.txt`)

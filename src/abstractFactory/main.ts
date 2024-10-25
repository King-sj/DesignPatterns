// main.ts
import { Factory } from "./factory";
import { ListFactory } from "./listFactory";
function getProduct(factory:Factory) {
  let people = factory.createLink("people", "http://www.people.com");
  let gmw = factory.createLink("gmw", "http://www.gmw.com");

  let us_yahoo = factory.createLink("us_yahoo", "http://www.us.yahoo.com");
  let jp_yahoo = factory.createLink("jp_yahoo", "http://www.jp.yahoo.com");
  let excite = factory.createLink("excite", "http://www.excite.com");
  let google = factory.createLink("google", "http://www.google.com");

  let traynews = factory.createTray("news");
  traynews.add(people);
  traynews.add(gmw);

  let trayyahoo = factory.createTray("yahoo");
  trayyahoo.add(us_yahoo);
  trayyahoo.add(jp_yahoo);

  let traysearch = factory.createTray("search");
  traysearch.add(trayyahoo);
  traysearch.add(excite);

  let page = factory.createPage("LinkPage", "gmw");
  page.add(traynews);
  page.add(traysearch);
  page.output();
}

let factory = new ListFactory();
getProduct(factory);
import React from "react";
import styled from "styled-components";
import { Consumer } from "../layouts/Context";
import { H2 } from "../components/atoms/Headings";
import { cz, en } from "../content/homepage";
import ImgSlider from "../layouts/ImgSlider";
import { ALink } from "../components/atoms/StyledLink";

const IndexPage = ({ data }) => {
  const imgs = data.allImageSharp.edges.map((i) => i.node.fluid);
  return (
    <Consumer>
      {({ int }) => (
        <MainPageContainer>
          <MainParagraph>
            <ImgSliderWrapper>
              <ImgSlider imgs={imgs} />
            </ImgSliderWrapper>
            <div>{int === "en" ? en : cz} </div>
          </MainParagraph>

          <News>
            <H2>{int === "en" ? "News" : "Aktuality"}</H2>
            <Green>Dny elektronové mikroskopie</Green>
            <NewItem>
              --- fotka --- <br />
              <p>
                Letos jsme se poprvé zapojili do{" "}
                <b>Dnů elektronové mikroskopie</b>, které každoročně probíhají v
                Mekce elektronové mikroskopie – Brně. Tento ročník proběhl z
                důvodu pandemie čínského koronaviru převážně online a to na
                webu:{" "}
                <ALink href="https://dem.brno.cz/">
                  Dny elektronové mikroskopie v Brně | 14. – 18. 4. 2021
                  (brno.cz).
                </ALink>{" "}
                Do programu jsme přispěli videi o pylech (web
                BÚ/Veřejnost/Vzdělávání ) a přednáškou nazvanou{" "}
                <b>Výzkum rozsivek s využitím elektronového mikroskopu</b>,
                kterou naživo přednesla naše kolegyně Markéta Fránková a její
                středoškolští stážisté z Otevřené vědy.
              </p>
            </NewItem>
            <Green>Vlasta Jankovská osmdesátiletá</Green>
            <NewItem>
              --- fotka --- <br />
              <p>
                Dne 11. dubna letošního roku oslavila významné životní jubileum
                naše skvělá a inspirativní kolegyně, paleoekoložka RNDr. Vlasta
                Jankovská, CSc.
              </p>
              <p>
                Vlasta Jankovská působí v Botanickém ústavu od roku 1963. Zabývá
                se vývojem vegetace a rekonstrukcí přírodního prostředí v závěru
                poslední doby ledové a v době poledové. Ve své práci uplatňuje
                řadu průkopnických přístupů, které se postupně staly součástí
                převzalo do běžného paleoekologického výzkumu. Jako jedna z mála
                paleoekologů si ve fosilním záznamu kromě pylů a rostlinných
                makrozbytků začala všímat i chlorokokálních řas. Ve spolupráci s
                předním českým algologem profesorem Jiřím Komárkem, který je
                rovněž z BÚ, vytvořila určovací klíč využívaný mezinárodní
                paleoekologickou komunitou. Řasy tak v paleoekologii využila
                jako skvělé bioindikátory, přinášející při interpretaci
                paleoekologických výsledků nové informace. Jejím dalším
                inovativním přístupem je netradiční aplikace pylové analýzy v
                souvislosti s archeologickým a historickým výzkumem, například
                využití pylu usazeného s prachem do starých knih v klášterních
                knihovnách.
              </p>
              <p>
                Doktorka V. Jankovská se ve svém výzkumu zaměřila na ložiska
                rostlinných zbytků z nejstarších vrcholného glaciálu, pozdního
                glaciálu a raného holocénu, tedy období, pro něž ještě donedávna
                nebylo mnoho známo. Přispěla tím významně k poznání zásadních
                rozdílů ve vývoji vegetace hercynského masivu a západních Karpat
                během poslední doby ledové. Byla jedním z prvních paleoekologů,
                kteří zde předpověděli existenci glaciálních refugií. Byla si
                vědoma již před desítkami let, že pro správnou interpretaci
                svých výsledků musí studovat současnou vegetaci v podobných
                klimatických podmínkách jako v minulosti. Při hledání takových
                situací opakovaně navštívila oblasti arktického Ruska.
                Předpověděla možnost existence moderních analogií pozdně
                glaciální střední Evropy, nacházejících se na jižní Sibiři. To
                nastartovalo rozsáhlý{" "}
                <ALink href="https://www.ibot.cas.cz/cs/verejnost/vzdelavani/">
                  výzkum moderních analogií
                </ALink>{" "}
                glaciální a postglaciální vegetace pod vedením prof. Milana
                Chytrého, včetně mnoha expedic na Sibiř.
              </p>
              <p>
                Po roce 1989 se doktorka V. Jankovská intenzivně zapojila do
                výuky na většině významných přírodovědeckých fakult v České
                republice a podstatně přispěla k výrazné oblibě paleoekologie u
                mladší generace a k jejímu současnému rozkvětu. Díky
                neutuchající vášni k oboru a silné potřebě výměny poznatků a
                názorů na se zahraničními odborníky napomohla po roce 1989 ke
                znovuzapojení české kvartérní paleoekologie na poli mezinárodní
                vědy. Mnohokrát vyrazila na výzkumné cesty do polárních oblastí
                Evropy a Ruska, nebála se ostnatých drátů, nebezpečného
                cestování či výsadků v bohapusté krajině ruské tundry, kdy často
                šlo o zdraví ne-li o život. Během cest na východ a sever od
                našich hranic navázala také mnohá vědecká i čistě lidská
                přátelství, která vydržela dodnes.
              </p>
              <p>
                Za svůj přínos byla v roce 2014 oceněna čestnou oborovou medailí
                Gregora Johanna Mendela za zásluhy v biologických vědách.
              </p>
              <p>
                Milá Vlasto, srdečně Ti blahopřejeme k Tvým kulatinám a přejeme
                Ti stejně neutuchající elán, sílu a optimismus jako doposud,
                spoustu osobních i pracovních radostí, a hlavně pevné zdraví!
              </p>
              <p>Kolegyně a kolegové z Botanického ústavu.</p>
              <p>
                Přečtěte si zajímavý{" "}
                <ALink href="http://ekolbrno.ibot.cas.cz/wp-content/uploads/2014/12/2014-Vlasta-Jankovska-Ziva.pdf">
                  rozhovor
                </ALink>{" "}
                Petra Kuneše s Vlastou Jankovskou. Vlasta je také na{" "}
                <ALink href="https://cs.wikipedia.org/wiki/Vlasta_Jankovsk%C3%A1">
                  wikipedii
                </ALink>
                .
              </p>
            </NewItem>
            <Green>Vývoj diverzity rostlin od konce doby ledové</Green>
            <NewItem>
              <p>
                Vědci Oddělení paleoekologie jako první kvantifikují regionální
                rozdíly v diverzitě rostlin od konce doby ledové aneb náš nový
                článek{" "}
                <i>
                  Holocene plant diversity dynamics show a distinct
                  biogeographical pattern in temperate Europe.
                </i>
              </p>
              <p>
                Jan Roleček ve spolupráci s dalšími vědci z našeho týmu a kolegy
                z PřF UK přinesli odpověď na otázku, jak se vyvíjela
                středoevropská biodiverzita od konce doby ledové. Analýzou
                fosilního pylu dokázali rekonstruovat její změny v oblastech s
                různými přírodními podmínkami a různou historií osídlení
                člověkem, a <b>jako první je přesněji kvantifikovali</b>.
                Výsledky jejich studie byly publikovány v předním mezinárodním
                časopise Journal of Biogeography.{" "}
                <ALink href="https://www.ibot.cas.cz/cs/2021/03/16/vedci-botanickeho-ustavu-jako-prvni-kvantifikuji-regionalni-rozdily-v-diverzite-rostlin-od-konce-doby-ledove/">
                  Více zde
                </ALink>
                .
              </p>
            </NewItem>
          </News>
        </MainPageContainer>
      )}
    </Consumer>
  );
};

export default IndexPage;

const News = styled.div`
  max-width: 100%;
  box-shadow: 1px 2px 15px #eee;
  padding: 0 1rem 0.5rem;
  border-radius: 4px;
  margin-top: 10px;
  background-color: #e2ead5;

  @media (min-width: ${(props) => props.theme.largeDevice}) {
    min-width: 200px;
    margin-left: 2rem;
    max-width: 33%;
  }

  @media (min-width: ${(props) => props.theme.extraLargeDevice}) {
  }
`;

const ImgSliderWrapper = styled.div`
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.largeDevice}) {
    max-width: 800px;
  }

  @media (min-width: 2200px) {
    max-width: initial;
    margin: initial;
  }
`;

const Green = styled.div`
  color: ${(props) => props.theme.darkred};
  font-weight: bold;
`;

const NewItem = styled.div`
  margin-bottom: 30px;
`;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;

  @media (min-width: ${(props) => props.theme.largeDevice}) {
    flex-direction: row;
  }
`;

const MainParagraph = styled.div``;

export const query = graphql`
  query {
    allImageSharp(filter: { fluid: { src: { regex: "/uvodni/" } } }) {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

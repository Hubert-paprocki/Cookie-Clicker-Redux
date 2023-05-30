import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import NavigationList from "./NavigationList";
import { changePage } from "../../../app/slices/navigationSlice";
import { RootState } from "../../../app/store";
import pl from "../../../languages/pl.json";
import en from "../../../languages/en.json";

const browserPolLangCheck = true;
const mockStore = configureStore<RootState>();

describe("NavigationList", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      cookie: { value: 0, history: [] },
      navigation: {
        link: "game",
      },
      shop: {
        boosters: [
          {
            id: 0,
            price: 40,
            isActive: false,
            cookieVal: 2,
            flashRed: false,
          },
          {
            id: 1,
            time: 2000,
            price: 50,
            isActive: false,
            cookieVal: 1,
            flashRed: false,
          },
          {
            id: 2,
            time: 1000,
            price: 100,
            isActive: false,
            cookieVal: 1,
            flashRed: false,
          },
          {
            id: 3,
            time: 1000,
            price: 150,
            isActive: false,
            cookieVal: 2,
            flashRed: false,
          },
          {
            id: 4,
            time: 2000,
            price: 250,
            isActive: false,
            cookieVal: 10,
            flashRed: false,
          },
        ],
      },
      scoreboard: { scoreList: [], loadedCount: 10, error: null },
      language: {
        selectedLanguage: browserPolLangCheck ? pl : en,
        langSwitch: browserPolLangCheck ? "pl" : "en",
      },
    });
  });

  it("renders navigation items correctly", () => {
    render(
      <Provider store={store}>
        <NavigationList />
      </Provider>
    );

    const earnCookiesLink = screen.getByText(pl.navigation.earnCookies);
    const scoreboardLink = screen.getByText(pl.navigation.scoreboard);
    const shopLink = screen.getByText(pl.navigation.shop);

    expect(earnCookiesLink).toBeInTheDocument();
    expect(scoreboardLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
  });

  it("dispatches changePage action when a navigation item is clicked", () => {
    render(
      <Provider store={store}>
        <NavigationList />
      </Provider>
    );

    const scoreboardLink = screen.getByText(pl.navigation.scoreboard);
    fireEvent.click(scoreboardLink);

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(changePage.type);

    expect(actions[0].payload).toBe("scoreboard");

    setTimeout(() => {
      expect(store.getState().navigation.link).toBe("scoreboard");
    }, 0);
    ///this is a very complicated function that does things unimaginable to normal humans
  });
});

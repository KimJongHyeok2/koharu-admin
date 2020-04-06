const HANDLE_SUB_MENU = 'sidemenu/HANDLE_SUB_MENU' as const;
export const handleSubMenu = (diff: number) => ({
    type: HANDLE_SUB_MENU,
    payload: diff
});

type SideMenuAction = ReturnType<typeof handleSubMenu>;

type SubMenu = {
    id: number,
    handle: boolean
};

type SideMenuState = {
    subMenus: SubMenu[]
};

const initialState: SideMenuState = {
    subMenus: [{
        id: 0,
        handle: false
    }]
};

function sidemenu(state: SideMenuState = initialState, action: SideMenuAction) {
    switch (action.type) {
        case HANDLE_SUB_MENU:
            return {
                ...state,
                subMenus: state.subMenus.map((item: SubMenu) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            handle: !item.handle
                        }
                    } else {
                        return {
                            ...item,
                            handle: false
                        }
                    }
                })
            };
        default: return state;
    }
};

export default sidemenu;

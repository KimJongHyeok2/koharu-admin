import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleSubMenu } from '../modules/sidemenu';
import { RootState } from '../modules';

export default function useSidemenu() {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.sidemenu);
    const onSubMenu = state.subMenus.filter((item) => item.handle === true)[0];

    const onHandleSubMenu = useCallback((id: number) => {
        dispatch(handleSubMenu(id));
    }, [dispatch]);

    return {
        onSubMenu,
        onHandleSubMenu
    };
};

import { GuardComponent } from "./guard.component";
import { AuthService } from '../auth.service';

describe('Testing guard component', () => {
    let guardComponent;
    let authService: AuthService;
    beforeEach(() => {
        guardComponent = new GuardComponent(authService);
    })


    // it('Default value should be false', () => {
    //     const disallow = guardComponent.disallow;
    //     expect(disallow).toBe(false)
    // });

    // it('Method allow should be true', () => {
    //     authService.allow();
    //     const allow = authService.allow;
    //     expect(allow).toBe(true)
    // });

    // it('Method disallow should be false', () => {
    //     authService.disallow();
    //     const disallow = authService.disallow;
    //     expect(disallow).toBe(false)
    // });
})
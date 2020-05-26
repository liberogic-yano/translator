// @see - https://qiita.com/tsrnk/items/fd95c3d8013d0795a260
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
  getModule
} from 'vuex-module-decorators'
import { CigaretteState, TimeState, CigaretteModel } from '~/models'
import { store } from '~/store'

@Module({
  dynamic: true,
  name: 'cigarette',
  namespaced: true,
  stateFactory: true,
  store: store
})
class CigarettePackageModule extends VuexModule {
  ci: CigaretteModel = new CigaretteModel()
  @Mutation
  public SAVE_STORAGE(model: Object) {
    localStorage.setItem('cigarette', JSON.stringify(model))
  }

  @Mutation
  public LOAD_STORAGE(): void {
    if (process.client) {
      const items = window.localStorage.getItem('cigarette') || ''
      if (items) {
        const store: CigaretteModel = JSON.parse(items) as CigaretteModel
        this.ci = store
      }
    }
  }

  @Action({ rawError: true })
  public save(args: Object) {
    this.SAVE_STORAGE(args)
  }

  @Action({ rawError: true })
  public load(): void {
    this.LOAD_STORAGE()
  }

  // @MutationAction({ mutate: ['_model'] })
  // async Reset() {
  //   return {
  //     _model: new CigaretteModel()
  //   }
  // }
}

export const CigarettePackage = getModule(CigarettePackageModule)

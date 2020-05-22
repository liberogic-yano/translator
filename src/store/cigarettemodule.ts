import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
  getModule
} from 'vuex-module-decorators'
import { store } from '~/store'

export interface CigaretteState {
  price: number
  count: number
  num: number
}

@Module({
  dynamic: true,
  name: 'cigarette',
  namespaced: true,
  stateFactory: true,
  store: store
})
class CigarettePackageModule extends VuexModule implements CigaretteState {
  price: number = 0
  count: number = 0
  num: number = 0

  @Mutation
  public SET_BOX_PRICE(args: number) {
    this.price = args
  }

  @Mutation
  public SET_BOX_COUNT(args: number) {
    this.count = args
  }

  @Mutation
  public SET_BOX_SMOKE(args: number) {
    this.num = args
  }

  /**
   * タバコ1箱の価格
   * @param args
   */
  @Action
  public SetPrice(args: number) {
    this.SET_BOX_PRICE(args)
  }

  /**
   * タバコ1箱の本数
   * @param args
   */
  @Action
  public SetCount(args: number) {
    this.SET_BOX_COUNT(args)
  }

  /**
   * タバコを吸う本数
   * @param args
   */
  @Action
  public SetSmoke(args: number) {
    this.SET_BOX_SMOKE(args)
  }

  @MutationAction({ mutate: ['price', 'count', 'num'] })
  async Reset() {
    return await {
      price: 0,
      count: 0,
      num: 0
    }
  }
}

export const CigarettePackage = getModule(CigarettePackageModule)

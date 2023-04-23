import { Valide } from "../pages/ValidePresenca";
import { Profile } from "../pages/Profile";
import { Consumo } from "../pages/Consumo";
import { Indicacoes } from "../pages/Indicacoes";
import { FindUser } from "../pages/FindMembro";
import { Inativo } from "../pages/ADM/Inativo";
import { Ranking } from "../pages/ADM/Classificacao";
import { SingUp } from "../pages/ADM/CreateUser";
import { DeletUser } from "../pages/ADM/DeleteUser";
import { TabBarApp } from "../routes/TabBarApp";
import { StacKMembros } from "../routes/StackMembros";
import { StackB2b } from "../routes/StackB2b";
import theme from "../themes/theme";
import { ListaPresença } from "../pages/ADM/ListaPresensa";
import { ListPresenca } from "../pages/ADM/ValidatePresenca";
import { Teste } from "../pages/Teste";

export const rotas = [
   {
      focus: theme.colors.yellow[1],
      color: theme.colors.yellow[2],
      name: "EXTRATO",
      component: Consumo,
      icon: "line-chart",
   },
   {
      focus: theme.colors.yellow[1],
      color: theme.colors.yellow[2],
      name: "VALIDE SUA PRESENÇA",
      component: Valide,
      icon: "hand-peace-o",
   },
   {
      focus: theme.colors.yellow[1],
      color: theme.colors.yellow[2],
      name: "LANÇAR CONSUMO",
      component: StacKMembros,
      icon: "handshake-o",
   },
   {
      focus: theme.colors.yellow[1],
      color: theme.colors.yellow[2],
      name: "INDICAÇÕES",
      component: Indicacoes,
      icon: "exchange",
   },
   {
      focus: theme.colors.yellow[1],
      color: theme.colors.yellow[2],
      name: "B2B",
      component: StackB2b,
      icon: "users",
   },

   {
      focus: theme.colors.gray[1],
      color: theme.colors.gray[2],
      name: "POSTS",
      component: TabBarApp,
      icon: "camera-retro",
   },
   {
      focus: theme.colors.gray[1],
      color: theme.colors.gray[2],
      name: "PERFIL",
      component: Profile,
      icon: "user-circle-o",
   },
   {
      focus: theme.colors.gray[1],
      color: theme.colors.gray[2],
      name: "LOCALIZE OS MEMBROS",
      component: FindUser,
      icon: "map-marker",
   },

   {
      focus: theme.colors.gray[1],
      color: theme.colors.gray[2],
      name: "TESTE",
      component: Teste,
      icon: "map-marker",
   },
];

export const rotasAdm = [
   {
      color: theme.colors.gray[2],
      name: "RANKING",
      component: Ranking,
      icon: "",
   },
   {
      color: theme.colors.gray[2],
      name: "CADASTRAR MEMBRO",
      component: SingUp,
      icon: "",
   },
   {
      color: theme.colors.gray[2],
      name: "CONFIRMAR PRESENÇA DOS MEMBROS",
      component: ListPresenca,
      icon: "",
   },
   // {
   //    color: theme.colors.gray[2],
   //    name: 'ALTERAR SENHA DE UM MEMBRO',
   //    component: UpdateSenhaUser,
   //    icon: '',
   // },
   {
      color: theme.colors.gray[2],
      name: "EXCLUIR UM MEMBRO",
      component: DeletUser,
      icon: "",
   },
   {
      color: theme.colors.gray[2],
      name: "INATIVAR UM MEMBRO",
      component: Inativo,
      icon: "",
   },
   {
      color: theme.colors.gray[2],
      name: "LISTA DE PRESENÇA",
      component: ListaPresença,
      icon: "",
   },
];

import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

export interface PokemonType {
  readonly name: string;
  readonly bgClass: string;
  readonly textClass: string;
  readonly borderClass: string;
}

export interface PokemonEntry {
  readonly id: string;
  readonly name: string;
  readonly pokedexNumber: number;
  readonly formattedNumber: string;
  readonly nameColorClass: string;
  readonly image: string;
  readonly alt: string;
  readonly description: string;
  readonly types: readonly PokemonType[];
}

@Component({
  selector: "app-demo-pokedex",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./demo-pokedex.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoPokedexComponent {
  readonly pokemonList: readonly PokemonEntry[] = [
    {
      id: "caterpie-entry",
      name: "Caterpie",
      pokedexNumber: 10,
      formattedNumber: "#0010",
      nameColorClass: "text-emerald-800",
      image: "assets/images/pokemon-10.png",
      alt: "Caterpie, un piccolo Pokémon a forma di bruco verde con grandi occhi rotondi, ventre giallo e un'antenna rossa a forma di Y sulla testa.",
      description:
        "Per proteggersi rilascia un puzzo terribile dalle antenne con cui respinge i nemici. I suoi piedini a ventosa gli permettono di arrampicarsi ovunque.",
      types: [
        {
          name: "Coleottero",
          bgClass: "bg-lime-100",
          textClass: "text-lime-800",
          borderClass: "border-lime-200",
        },
      ],
    },
    {
      id: "weedle-entry",
      name: "Weedle",
      pokedexNumber: 13,
      formattedNumber: "#0013",
      nameColorClass: "text-amber-800",
      image: "assets/images/pokemon-13.png",
      alt: "Weedle, un Pokémon simile a un millepiedi marrone chiaro con un naso rosso a palla e un pungiglione velenoso sulla testa e sulla coda.",
      description:
        "Spesso si nasconde nell'erba alta o sotto le foglie. Ha un pungiglione velenoso sulla testa lungo circa 5 centimetri.",
      types: [
        {
          name: "Coleottero",
          bgClass: "bg-lime-100",
          textClass: "text-lime-800",
          borderClass: "border-lime-200",
        },
        {
          name: "Veleno",
          bgClass: "bg-purple-100",
          textClass: "text-purple-800",
          borderClass: "border-purple-200",
        },
      ],
    },
    {
      id: "bulbasaur-entry",
      name: "Bulbasaur",
      pokedexNumber: 1,
      formattedNumber: "#0001",
      nameColorClass: "text-emerald-800",
      image: "assets/images/pokemon-1.png",
      alt: "Bulbasaur, un Pokémon quadrupede simile a un dinosauro di colore verde acqua con macchie più scure e un grande bulbo verde sulla schiena.",
      description:
        "Per qualche tempo dopo la nascita, cresce assorbendo nutrimento dal seme piantato sul suo dorso.",
      types: [
        {
          name: "Erba",
          bgClass: "bg-emerald-100",
          textClass: "text-emerald-800",
          borderClass: "border-emerald-200",
        },
        {
          name: "Veleno",
          bgClass: "bg-purple-100",
          textClass: "text-purple-800",
          borderClass: "border-purple-200",
        },
      ],
    },
  ];
}

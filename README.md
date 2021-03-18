# GroupBy
Angular pipe for grouping items inside *ngFor

## Installation
`npm i @thiagoprz/group-by`

## Usage
Add GroupByModule to your component module:
```
...
import {GroupByModule} from "@thiagoprz/group-by";

@NgModule({
  ...
  GroupByModule
})
export class ComponentModule {}
```
Apply pipe on *ngFor loop on your template(eg: `component.html` using ionic ion-list):
```
...
<ion-list *ngFor="let group of items|groupBy:'field'">
  <ion-list-header>{{ group.key }}</ion-list-header>
  <ion-item *ngFor="let item of group.value; let i = index">
    {{ item.FIELD1 }}
  </ion-item>
</ion-list>
...
```

### API

| Field     | Description         |  
| --------- | ------------------- | 
| key      | Represents the value of the grouping field |
| value   | Represents grouped items |

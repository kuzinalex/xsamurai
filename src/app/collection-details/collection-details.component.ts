import { Component, Inject, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { VolumeStatisticModel } from '../model/VolumeStatisticModel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ActivatedRoute, Params } from '@angular/router';
import { RestServiceService } from '../service/rest-service.service';
import { ChartModel } from '../model/ChartModel';

@Component({
    selector: 'app-collection-details',
    templateUrl: './collection-details.component.html',
    styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent implements OnInit {

    id: any;
    collection: VolumeStatisticModel = {
        uuid: '',
        collection_symbol: '',
        collection_name: '',
        collection_image_link: '',
        blockchain: '',
        holders_count: 0,
        total_supply: 0,
        total_volume: 0,
        volume_24h: 0,
        txns: 0,
        floor_price: 0,
        price_24h_change: 0,
        price_7d_change: 0,
        price_30d_change: 0,
        twitter: '',
        description: '',
        listed_count: 0
    };

    overviewChart: any;

    options: any;

    constructor(private route: ActivatedRoute, private service: RestServiceService) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => this.id = params['id']);
        console.log(this.id);
        this.service.getCollectionDetail(this.id).subscribe(data => {
            this.collection = data;
            console.log(this.collection);
        })

        this.service.getCollectionChart(this.id,'overview').subscribe(data=>{

            console.log(data);

            this.overviewChart = {
                labels: data.data.labels,
                datasets: [
                    {
                        label: 'Price',
                        data: data.data.datasets.map(this.mapPrice),
                        fill: true,
                        borderColor: documentStyle.getPropertyValue('--black-500'),
                        tension: 0.4,
                        backgroundColor: 'rgba(255,167,38,0.2)'
                    }
                ]
            };

        })


        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        display: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        display: false
                    }
                }
            }
        };

    }


    toTwitter() {
        window.open(this.collection.twitter);
    }

    toME() {
        window.open();
    }

    mapPrice(price:number){
        let value1=(price/1000000000)
        if(value1<100){
          return value1.toFixed(1);
        }
        return value1.toFixed(0);
    }
}

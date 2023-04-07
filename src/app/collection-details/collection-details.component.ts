import { Component, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { VolumeStatisticModel } from '../model/VolumeStatisticModel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent implements OnInit {

  volumes:VolumeStatisticModel[]=[
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:20900000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:2090000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209000000, price_24h_change:0, price_7d_change:0, price_30d_change:0},
    {collection_symbol:"SYM", collection_name:"ABC", collection_image_link:"https://pbs.twimg.com/profile_images/1567145397314850816/vjjCHGpo_normal.jpg", blockchain:"SOL", holders_count:150, total_supply:5555, total_volume:1555654, volume_24h:25000, txns:0, floor_price:209, price_24h_change:0, price_7d_change:0, price_30d_change:0}
  ]

  data: any;

  options: any;

  constructor() { }

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                // {
                //     label: 'First Dataset',
                //     data: [65, 59, 80, 81, 56, 55, 40],
                //     fill: false,
                //     tension: 0.4,
                //     borderColor: documentStyle.getPropertyValue('--blue-500'),
                // },
                // {
                //     label: 'Second Dataset',
                //     data: [28, 48, 40, 19, 86, 27, 90],
                //     fill: false,
                //     borderDash: [5, 5],
                //     tension: 0.4,
                //     borderColor: documentStyle.getPropertyValue('--teal-500')
                // },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--black-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };
        
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
                        display:false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        display:false
                    }
                }
            }
        };
    
  }

}

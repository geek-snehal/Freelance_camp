//OnInit access the  current proccess as soon as the component loads
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
	moduleId: module.id,
	selector: 'proposal-show',
	templateUrl: 'proposal-show.component.html',
	styleUrls: ['proposal-show.component.css'],
	providers: [ ProposalService ]
})
export class ProposalShowComponent implements OnInit {

    //when show page loads, it will call this constructor which will get instance of current route and  //will store in route variabl.And this route we can access in this file functions.

	constructor(
	    private route: ActivatedRoute,
	    private proposalService: ProposalService,
	    private http: Http
	) {}

	@Input()
	proposal: Proposal;

    
    // subscribe gives us access to the object to whcih we want to communicate
	ngOnInit(): void{
      let proposalRequest = this.route.params
         .flatMap((params: Params) =>
            this.proposalService.getProposal(+params['id'])
         );
       proposalRequest.subscribe(response => this.proposal = response.json());  
	}
}

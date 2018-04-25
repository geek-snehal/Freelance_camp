"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//OnInit access the  current proccess as soon as the component loads
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const proposal_1 = require("./proposal");
const proposal_service_1 = require("./proposal.service");
let ProposalShowComponent = class ProposalShowComponent {
    //when show page loads, it will call this constructor which will get instance of current route and  //will store in route variabl.And this route we can access in this file functions.
    constructor(route, proposalService, http) {
        this.route = route;
        this.proposalService = proposalService;
        this.http = http;
    }
    // subscribe gives us access to the object to whcih we want to communicate
    ngOnInit() {
        let proposalRequest = this.route.params
            .flatMap((params) => this.proposalService.getProposal(+params['id']));
        proposalRequest.subscribe(response => this.proposal = response.json());
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", proposal_1.Proposal)
], ProposalShowComponent.prototype, "proposal", void 0);
ProposalShowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'proposal-show',
        templateUrl: 'proposal-show.component.html',
        styleUrls: ['proposal-show.component.css'],
        providers: [proposal_service_1.ProposalService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        proposal_service_1.ProposalService,
        http_1.Http])
], ProposalShowComponent);
exports.ProposalShowComponent = ProposalShowComponent;
//# sourceMappingURL=proposal-show.component.js.map
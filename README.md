# angular-pip — Minimalistic and highly opinionated angular-seed

A modified version of the [angular-seed](https://github.com/angular/angular-seed) project incorporating many of the basic recommendations from the following sources:

* [John Papa](https://github.com/johnpapa/angularjs-styleguide) 
* [Todd Motto](https://github.com/toddmotto/angularjs-styleguide)
* [Minko Gechev et al](https://github.com/mgechev/angularjs-style-guide)
* [Google's Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

This fork also gets rid of all the non-essentials. For me that means: the async template and the version display components.

## Background
[Yeoman's official generator for Angular](https://github.com/yeoman/generator-angular) still uses the “Sock Drawer” directory organization. Although it works for small projects, this approach doesn't scale very well. In fact, as of September 2014, Google's app structure recommendations suggests a modular structure instead. The Angular-seed project has recently been updated to comply with these recommendations.

A promising alternative seemed to be the [ng-poly generator](https://github.com/dustinspecker/generator-ng-poly). Does this generator follow the same directory structure conventions as those observed in Angular-seed? That's ultimately the question I wanted to answer.

Then I discovered Todd's and John's tips and found myself following most of those. Since ng-poly's generated code diverges from them, I thought I could just keep it simple and create my own customized version of angular-seed.

Given that I'm still learning the ropes of Angular, this repo may go through quite a lot of change before it is stable. Use at your own risk.
'use strict';

(function (app) {

  app.controller('trainings', ['$scope',
    function ($scope) {

    }]);

  app.controller('editTraining', ['$scope', '$routeParams',
    function ($scope, $routeParams) {

      $scope.assaultTopics = [];
      $scope.justiceSystemTopics = [];
      $scope.underservedPopulationTopics = [];
      $scope.communityResponseTopics = [];

      $scope.types = [
        { name: 'Training',
          value: 'training',
          categories: [
            { name: "Advocacy organization staff (NAACP, AARP)", value: "Advocacy organization staff (NAACP, AARP)"},
            { name: "Attorneys/law students", value: "Attorneys/law students"},
            { name: "Batterer intervention program staff", value: "Batterer intervention program staff"},
            { name: "Child care staff", value: "Child care staff"},
            { name: "Child protective service workers", value: "Child protective service workers"},
            { name: "Children’s advocates (not affi liated with CPS)", value: "Children’s advocates (not affi liated with CPS)"},
            { name: "Correction personnel (probation, parole, and correctional facilities)", value: "Correction personnel (probation, parole, and correctional facilities)"},
            { name: "Court personnel (tribal)", value: "Court personnel (tribal)"},
            { name: "Court personnel (non-tribal)", value: "Court personnel (non-tribal)"},
            { name: "Educators (teachers, administrators, etc.)", value: "Educators (teachers, administrators, etc.)"},
            { name: "Faith-based organization staff", value: "Faith-based organization staff"},
            { name: "Government agency staff (vocational rehabilitation, food stamps, TANF)", value: "Government agency staff (vocational rehabilitation, food stamps, TANF)"},
            { name: "Health professionals (doctors, nurses--does not include SAFE/SANE)", value: "Health professionals (doctors, nurses--does not include SAFE/SANE)"},
            { name: "Immigrant organization staff (non-governmental)", value: "Immigrant organization staff (non-governmental)"},
            { name: "Interpreters/translators", value: "Interpreters/translators"},
            { name: "Law enforcement offi cers (tribal)", value: "Law enforcement offi cers (tribal)"},
            { name: "Law enforcement offi cers (non-tribal)", value: "Law enforcement offi cers (non-tribal)"},
            { name: "Legal services staff (does not include attorneys)", value: "Legal services staff (does not include attorneys)"},
            { name: "Mental health professionals", value: "Mental health professionals"},
            { name: "Military command staff", value: "Military command staff"},
            { name: "Multidisciplinary (various disciplines at same training)", value: "Multidisciplinary (various disciplines at same training)"},
            { name: "Prosecutors (tribal)", value: "Prosecutors (tribal)"},
            { name: "Prosecutors (non-tribal)", value: "Prosecutors (non-tribal)"},
            { name: "Sexual assault forensic examiner/sexual assault nurse examiner (SAFE/SANE)", value: "Sexual assault forensic examiner/sexual assault nurse examiner (SAFE/SANE)"},
            { name: "Social service organization staff (non-governmental—food bank, homeless shelter)", value: "Social service organization staff (non-governmental—food bank, homeless shelter)"},
            { name: "State or tribal domestic violence coalition staff (includes sexual assault, domestic violence, and dual)", value: "State or tribal domestic violence coalition staff (includes sexual assault, domestic violence, and dual)"},
            { name: "Tribal government/Tribal government agency staff", value: "Tribal government/Tribal government agency staff"},
            { name: "Victim advocates (tribal, includes sexual assault, domestic violence, and dual)", value: "Victim advocates (tribal, includes sexual assault, domestic violence, and dual)"},
            { name: "Victim advocates (non-tribal, non-governmental, includes sexual assault, domestic violence, and dual)", value: "Victim advocates (non-tribal, non-governmental, includes sexual assault, domestic violence, and dual)"},
            { name: "Victim assistants (tribal, includes victim-witness specialists/coordinators)", value: "Victim assistants (tribal, includes victim-witness specialists/coordinators)"},
            { name: "Victim assistants (non-tribal, governmental, includes victim-witness specialists/coordinators)", value: "Victim assistants (non-tribal, governmental, includes victim-witness specialists/coordinators)"},
            { name: "Volunteers", value: "Volunteers"},
            { name: "Other", value: "" }
          ],

          assaultTopics: [
            "Advocate response",
            "Child witnesses",
            "Child sexual abuse overview, dynamics, and services",
            "Child development",
            "Confidentiality",
            "Dating violence overview, dynamics, and services",
            "Domestic violence overview, dynamics, and services",
            "Mandatory reporting requirements",
            "Parenting issues",
            "Response to victims/survivors who are incarcerated",
            "Response to victims/survivors who have been trafficked",
            "Safety planning for victims/survivors",
            "Sexual assault overview, dynamics, and services",
            "Stalking overview, dynamics, and services"
          ],

          justiceSystemTopics: [
            "Civil court procedures",
            "Child sexual abuse statutes/codes",
            "Criminal court procedures",
            "Domestic violence statutes/codes",
            "Family court procedures",
            "Firearms and domestic violence",
            "Decreasing dual arrests/identifying predominant aggressor",
            "Immigration",
            "Judicial response",
            "Juvenile court procedures",
            "Law enforcement response",
            "Pro-arrest policies",
            "Probation response",
            "Prosecution response",
            "Protection orders (including full faith and credit)",
            "Sexual assault forensic examination",
            "Sexual assault statutes/codes",
            "Stalking statutes/codes",
            "Tribal jurisdiction and Public Law"
          ],

          underservedPopulationTopics: [
            "are American Indian or Alaska Native",
            "are Asian",
            "are black or African American",
            "are elderly",
            "are geographically isolated",
            "are Hispanic or Latino",
            "are homeless or living in poverty",
            "are immigrants, refugees, or asylum seekers",
            "are lesbian, gay, bisexual, transgender, or intersex",
            "are Native Hawaiian or other Pacifi c Islander",
            "have disabilities",
            "have limited English profi ciency",
            "have mental health issues",
            "have substance abuse issues"
          ],

          communityResponseTopics: [
            "Community response to sexual assault",
            "Coordinated community response",
            "Response teams (DART, DVRT, SART)",
            "Technology"
          ]

        },
        { name: 'Educational', value: 'educational', categories: [
          { name: "Child care providers", value: "Child care providers" },
          { name: "Community advocacy groups (NAACP, AARP)", value: "Community advocacy groups (NAACP, AARP)" },
          { name: "Community businesses (retail stores, pharmacies)", value: "Community businesses (retail stores, pharmacies)" },
          { name: "Community groups (service or social groups)", value: "Community groups (service or social groups)" },
          { name: "Community members (unaffi liated adults)", value: "Community members (unaffi liated adults)" },
          { name: "Educators (teachers, administrators, etc.)", value: "Educators (teachers, administrators, etc.)" },
          { name: "Elementary school students", value: "Elementary school students" },
          { name: "Faith-based groups", value: "Faith-based groups" },
          { name: "Middle and high school students", value: "Middle and high school students" },
          { name: "Parents or guardians", value: "Parents or guardians" },
          { name: "University or college students", value: "University or college students" },
          { name: "Victims/survivors (do not count psychoeducation groups)", value: "Victims/survivors (do not count psychoeducation groups)" },
          { name: "Other", value: "" }
        ]}
      ];

      if ($routeParams.id === 'new') {
        $scope.training = {
          occurredAt: new Date(),
          type: $scope.types[0]
        };
        $scope.title = 'New Training';
      } else {
        $scope.title = 'Update Training';
      }

      $scope.toggleSelection = function toggleSelection(item, collection) {
        var idx = $scope[collection].indexOf(item);
        if (idx > -1) {
          $scope[collection].splice(idx, 1);
        } else {
          $scope[collection].push(item);
        }
      };
    }]);

  app.controller('roles', ['$scope',
    function ($scope) {

    }]);

  app.controller('editRole', ['$scope', '$routeParams',
    function ($scope, $routeParams) {

    }]);

})(angular.module('app'));












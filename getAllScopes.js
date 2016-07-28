getScopes($rootScope);

function getScopes(root) {
        var scopes = [];

        function visit(scope) {
            scopes.push(scope);
        }
        function traverse(scope) {
            visit(scope);
            if (scope.$$nextSibling)
                traverse(scope.$$nextSibling);
            if (scope.$$childHead)
                traverse(scope.$$childHead);
        }

        traverse(root);
        return scopes;
    }

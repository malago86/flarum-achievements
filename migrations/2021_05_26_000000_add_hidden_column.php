<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('achievements', function($table) {
            $table->boolean('hidden');
        });
    },
    'down' => function (Builder $schema) {
    },
];